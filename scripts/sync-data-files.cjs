#!/usr/bin/env node

/**
 * 多校联盟数据文件同步脚本
 * 用于将 dev 环境的数据同步到 public 环境
 */

const fs = require('fs');
const path = require('path');

/**
 * 确保目录存在
 * @param {string} dirPath - 目录路径
 */
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 创建目录: ${dirPath}`);
  }
}

/**
 * 复制文件并验证
 * @param {string} sourcePath - 源文件路径
 * @param {string} targetPath - 目标文件路径
 * @returns {boolean} 是否复制成功
 */
function copyFileWithValidation(sourcePath, targetPath) {
  try {
    if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  源文件不存在: ${sourcePath}`);
      return false;
    }

    // 验证源文件是否为有效JSON
    const sourceContent = fs.readFileSync(sourcePath, 'utf8');
    JSON.parse(sourceContent); // 验证JSON格式

    // 确保目标目录存在
    ensureDirectoryExists(path.dirname(targetPath));

    // 复制文件
    fs.copyFileSync(sourcePath, targetPath);
    
    // 验证复制后的文件
    const targetContent = fs.readFileSync(targetPath, 'utf8');
    if (sourceContent === targetContent) {
      console.log(`✅ 成功同步: ${path.basename(sourcePath)}`);
      return true;
    } else {
      console.log(`❌ 同步验证失败: ${path.basename(sourcePath)}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ 同步失败 ${path.basename(sourcePath)}: ${error.message}`);
    return false;
  }
}

/**
 * 更新文件的时间戳
 * @param {string} filePath - 文件路径
 */
function updateTimestamp(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    if (data.lastUpdated) {
      data.lastUpdated = new Date().toISOString();
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`🕒 更新时间戳: ${path.basename(filePath)}`);
    }
  } catch (error) {
    console.log(`⚠️  更新时间戳失败 ${path.basename(filePath)}: ${error.message}`);
  }
}

/**
 * 执行数据同步
 * @returns {Object} 同步结果
 */
function syncDataFiles() {
  const syncResult = {
    timestamp: new Date().toISOString(),
    success: true,
    files: {},
    summary: {
      total: 0,
      success: 0,
      failed: 0
    }
  };

  const filePairs = [
    {
      name: 'heatmap-data.json',
      source: 'docs/school/heatmap-data.json',
      target: 'docs/public/school/heatmap-data.json'
    },
    {
      name: 'province-data.json',
      source: 'docs/school/province-data.json',
      target: 'docs/public/school/province-data.json'
    },
    {
      name: 'province-mapping.json',
      source: 'docs/school/province-mapping.json',
      target: 'docs/public/school/province-mapping.json'
    }
  ];

  console.log('🔄 开始数据文件同步...\n');

  for (const pair of filePairs) {
    syncResult.summary.total++;
    
    console.log(`📋 同步 ${pair.name}:`);
    
    const success = copyFileWithValidation(pair.source, pair.target);
    
    if (success) {
      // 更新时间戳
      updateTimestamp(pair.source);
      updateTimestamp(pair.target);
      
      syncResult.files[pair.name] = {
        status: 'success',
        source: pair.source,
        target: pair.target
      };
      syncResult.summary.success++;
    } else {
      syncResult.files[pair.name] = {
        status: 'failed',
        source: pair.source,
        target: pair.target
      };
      syncResult.summary.failed++;
      syncResult.success = false;
    }
    console.log('');
  }

  return syncResult;
}

/**
 * 生成同步报告
 * @param {Object} result - 同步结果
 */
function generateSyncReport(result) {
  console.log('📊 同步结果汇总:');
  console.log(`   总计: ${result.summary.total} 个文件`);
  console.log(`   成功: ${result.summary.success} 个`);
  console.log(`   失败: ${result.summary.failed} 个`);
  console.log('');

  if (result.success) {
    console.log('✅ 所有数据文件同步完成！');
  } else {
    console.log('❌ 部分文件同步失败，请检查上述详情。');
  }

  // 保存同步报告
  const reportDir = 'docs/.vitepress/cache';
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  const reportPath = path.join(reportDir, 'data-sync-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));
  console.log(`📄 同步报告已保存到: ${reportPath}`);
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 多校联盟数据文件同步工具\n');
  
  const result = syncDataFiles();
  generateSyncReport(result);

  // 根据同步结果设置退出码
  process.exit(result.success ? 0 : 1);
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = {
  copyFileWithValidation,
  updateTimestamp,
  syncDataFiles,
  generateSyncReport
};