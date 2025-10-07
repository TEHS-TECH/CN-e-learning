#!/usr/bin/env node

/**
 * 多校联盟数据一致性验证脚本
 * 用于验证 public 和 dev 环境之间的数据一致性
 */

const fs = require('fs');
const path = require('path');

/**
 * 验证JSON文件格式是否正确
 * @param {string} filePath - 文件路径
 * @returns {boolean} 是否为有效的JSON格式
 */
function validateJsonFormat(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    return true;
  } catch (error) {
    console.error(`❌ JSON格式错误 ${filePath}: ${error.message}`);
    return false;
  }
}

/**
 * 比较两个数据文件的内容
 * @param {string} file1Path - 第一个文件路径
 * @param {string} file2Path - 第二个文件路径
 * @returns {Object} 比较结果
 */
function compareDataFiles(file1Path, file2Path) {
  const result = {
    identical: false,
    differences: [],
    file1Exists: fs.existsSync(file1Path),
    file2Exists: fs.existsSync(file2Path)
  };

  if (!result.file1Exists) {
    result.differences.push(`文件不存在: ${file1Path}`);
  }
  
  if (!result.file2Exists) {
    result.differences.push(`文件不存在: ${file2Path}`);
  }

  if (!result.file1Exists || !result.file2Exists) {
    return result;
  }

  try {
    const data1 = JSON.parse(fs.readFileSync(file1Path, 'utf8'));
    const data2 = JSON.parse(fs.readFileSync(file2Path, 'utf8'));

    // 比较学校总数
    if (data1.totalSchools !== data2.totalSchools) {
      result.differences.push(
        `学校总数不一致: ${path.basename(file1Path)}(${data1.totalSchools}) vs ${path.basename(file2Path)}(${data2.totalSchools})`
      );
    }

    // 比较更新时间
    if (data1.lastUpdated !== data2.lastUpdated) {
      result.differences.push(
        `更新时间不一致: ${path.basename(file1Path)}(${data1.lastUpdated}) vs ${path.basename(file2Path)}(${data2.lastUpdated})`
      );
    }

    // 如果是热力图数据，比较省份数量
    if (data1.data && data2.data) {
      if (data1.data.length !== data2.data.length) {
        result.differences.push(
          `省份数量不一致: ${path.basename(file1Path)}(${data1.data.length}) vs ${path.basename(file2Path)}(${data2.data.length})`
        );
      }
    }

    // 如果是省份数据，比较省份详情
    if (data1.provinces && data2.provinces) {
      const provinces1 = Object.keys(data1.provinces);
      const provinces2 = Object.keys(data2.provinces);
      
      if (provinces1.length !== provinces2.length) {
        result.differences.push(
          `省份代码数量不一致: ${path.basename(file1Path)}(${provinces1.length}) vs ${path.basename(file2Path)}(${provinces2.length})`
        );
      }

      // 检查每个省份的学校数量
      for (const provinceCode of provinces1) {
        const count1 = data1.provinces[provinceCode]?.count || 0;
        const count2 = data2.provinces[provinceCode]?.count || 0;
        
        if (count1 !== count2) {
          const provinceName = data1.provinces[provinceCode]?.name || provinceCode;
          result.differences.push(
            `${provinceName}学校数量不一致: ${path.basename(file1Path)}(${count1}) vs ${path.basename(file2Path)}(${count2})`
          );
        }
      }
    }

    result.identical = result.differences.length === 0;
    return result;

  } catch (error) {
    result.differences.push(`比较过程中发生错误: ${error.message}`);
    return result;
  }
}

/**
 * 生成数据一致性报告
 * @returns {Object} 验证报告
 */
function generateConsistencyReport() {
  const report = {
    timestamp: new Date().toISOString(),
    overall: true,
    files: {},
    summary: {
      total: 0,
      passed: 0,
      failed: 0
    }
  };

  const filePairs = [
    {
      name: 'heatmap-data.json',
      dev: 'docs/school/heatmap-data.json',
      public: 'docs/public/school/heatmap-data.json'
    },
    {
      name: 'province-data.json',
      dev: 'docs/school/province-data.json',
      public: 'docs/public/school/province-data.json'
    },
    {
      name: 'province-mapping.json',
      dev: 'docs/school/province-mapping.json',
      public: 'docs/public/school/province-mapping.json'
    }
  ];

  console.log('🔍 开始数据一致性验证...\n');

  for (const pair of filePairs) {
    report.summary.total++;
    
    console.log(`📋 验证 ${pair.name}:`);
    
    // 验证JSON格式
    const devValid = validateJsonFormat(pair.dev);
    const publicValid = validateJsonFormat(pair.public);
    
    if (!devValid || !publicValid) {
      report.files[pair.name] = {
        status: 'failed',
        reason: 'JSON格式错误或文件不存在',
        devExists: fs.existsSync(pair.dev),
        publicExists: fs.existsSync(pair.public)
      };
      report.summary.failed++;
      report.overall = false;
      console.log(`   ❌ JSON格式验证失败`);
      continue;
    }

    // 比较文件内容
    const comparison = compareDataFiles(pair.dev, pair.public);
    
    if (comparison.identical) {
      report.files[pair.name] = {
        status: 'passed',
        reason: '数据完全一致'
      };
      report.summary.passed++;
      console.log(`   ✅ 数据一致`);
    } else {
      report.files[pair.name] = {
        status: 'failed',
        reason: '数据不一致',
        differences: comparison.differences
      };
      report.summary.failed++;
      report.overall = false;
      console.log(`   ❌ 数据不一致:`);
      comparison.differences.forEach(diff => {
        console.log(`      - ${diff}`);
      });
    }
    console.log('');
  }

  return report;
}

/**
 * 保存验证报告到文件
 * @param {Object} report - 验证报告
 */
function saveReport(report) {
  const reportDir = 'docs/.vitepress/cache';
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const reportPath = path.join(reportDir, 'data-consistency-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`📄 验证报告已保存到: ${reportPath}`);
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 多校联盟数据一致性验证工具\n');
  
  const report = generateConsistencyReport();
  
  console.log('📊 验证结果汇总:');
  console.log(`   总计: ${report.summary.total} 个文件对`);
  console.log(`   通过: ${report.summary.passed} 个`);
  console.log(`   失败: ${report.summary.failed} 个`);
  console.log('');

  if (report.overall) {
    console.log('✅ 所有数据文件一致性验证通过！');
  } else {
    console.log('❌ 发现数据不一致问题，请检查上述详情。');
  }

  // 保存报告
  saveReport(report);

  // 根据验证结果设置退出码
  process.exit(report.overall ? 0 : 1);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = {
  validateJsonFormat,
  compareDataFiles,
  generateConsistencyReport,
  saveReport
};