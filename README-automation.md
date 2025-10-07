# 多校联盟数据自动化维护系统

本文档描述了多校联盟数据的自动化维护系统，包括数据同步、一致性验证和异常告警机制。

## 🎯 系统概述

自动化维护系统确保多校联盟数据在不同环境（dev 和 public）之间保持一致性，并在出现问题时及时告警。

### 核心功能

- **数据同步**: 自动将 dev 环境的数据同步到 public 环境
- **一致性验证**: 定期检查两个环境之间的数据一致性
- **异常告警**: 在发现问题时自动创建 Issue 并发送通知
- **自动修复**: 检测到不一致时自动尝试修复

## 📁 文件结构

```
├── .github/workflows/
│   ├── data-sync-validation.yml      # 数据同步验证工作流
│   ├── school-info-auto-append.yml   # 学校信息自动填报（已增强）
│   └── alert-system.yml              # 异常告警系统
├── scripts/
│   ├── validate-data-consistency.cjs # 数据一致性验证脚本
│   └── sync-data-files.cjs          # 数据文件同步脚本
└── docs/
    ├── school/                       # dev 环境数据
    │   ├── heatmap-data.json
    │   ├── province-data.json
    │   └── province-mapping.json
    └── public/school/                # public 环境数据
        ├── heatmap-data.json
        ├── province-data.json
        └── province-mapping.json
```

## 🔄 工作流程

### 1. 数据同步验证工作流 (`data-sync-validation.yml`)

**触发条件:**
- 定时执行（每天凌晨 2 点）
- 手动触发
- 数据文件发生变化时

**执行步骤:**
1. 检出代码
2. 设置 Node.js 环境
3. 创建并执行数据验证脚本
4. 如发现不一致，自动同步数据
5. 提交同步后的文件
6. 如验证失败，创建问题报告

### 2. 学校信息自动填报工作流（已增强）

**新增功能:**
- 在添加学校信息到表格后，自动同步数据到 JSON 文件
- 同时更新 dev 和 public 环境的数据
- 确保新增学校信息在所有数据文件中保持一致

### 3. 异常告警系统 (`alert-system.yml`)

**触发条件:**
- 数据同步验证工作流失败时
- 手动触发告警

**告警类型:**
- `data_inconsistency`: 数据不一致告警
- `sync_failure`: 数据同步失败告警
- `validation_error`: 数据验证错误告警
- `workflow_failure`: 工作流执行失败告警

**告警机制:**
- 创建或更新 GitHub Issue
- 高优先级告警会发送到讨论区
- 自动清理超过 24 小时无活动的告警

## 🛠️ 本地工具

### 数据一致性验证

```bash
# 验证数据一致性
pnpm run validate:data
```

**功能:**
- 检查 JSON 文件格式
- 比较 dev 和 public 环境数据
- 验证学校总数、省份数量等关键指标
- 生成详细的验证报告

### 数据文件同步

```bash
# 同步数据文件
pnpm run sync:data
```

**功能:**
- 将 dev 环境数据复制到 public 环境
- 验证复制后的文件完整性
- 更新文件时间戳
- 生成同步报告

## 📊 监控和报告

### 验证报告

验证报告保存在 `docs/.vitepress/cache/data-consistency-report.json`，包含：

```json
{
  "timestamp": "2025-01-27T10:00:00.000Z",
  "overall": true,
  "files": {
    "heatmap-data.json": {
      "status": "passed",
      "reason": "数据完全一致"
    }
  },
  "summary": {
    "total": 3,
    "passed": 3,
    "failed": 0
  }
}
```

### 同步报告

同步报告保存在 `docs/.vitepress/cache/data-sync-report.json`，包含：

```json
{
  "timestamp": "2025-01-27T10:00:00.000Z",
  "success": true,
  "files": {
    "heatmap-data.json": {
      "status": "success",
      "source": "docs/school/heatmap-data.json",
      "target": "docs/public/school/heatmap-data.json"
    }
  },
  "summary": {
    "total": 3,
    "success": 3,
    "failed": 0
  }
}
```

## 🚨 告警处理

### 告警级别

- **高优先级**: 数据不一致、工作流失败
- **中优先级**: 同步失败、验证错误
- **低优先级**: 一般系统通知

### 处理流程

1. **自动处理**: 系统首先尝试自动修复问题
2. **告警通知**: 如无法自动修复，创建 Issue 告警
3. **人工介入**: 维护人员根据告警信息进行处理
4. **自动清理**: 超过 24 小时无活动的告警自动关闭

## 🔧 维护指南

### 日常维护

1. **监控告警**: 定期检查 GitHub Issues 中的告警信息
2. **查看报告**: 检查验证和同步报告，了解系统运行状态
3. **手动验证**: 在重要更新后手动运行验证脚本

### 故障排除

#### 数据不一致问题

1. 运行验证脚本查看具体差异
2. 检查最近的数据变更
3. 运行同步脚本修复不一致
4. 重新验证确保问题解决

#### 同步失败问题

1. 检查源文件的 JSON 格式
2. 验证文件权限和路径
3. 查看详细的错误日志
4. 手动运行同步脚本进行诊断

#### 工作流失败问题

1. 查看 GitHub Actions 的详细日志
2. 检查相关的代码变更
3. 验证工作流配置的正确性
4. 必要时手动重新运行工作流

## 📈 系统优势

1. **自动化程度高**: 减少人工干预，提高效率
2. **实时监控**: 及时发现和处理问题
3. **数据一致性**: 确保多环境数据同步
4. **可追溯性**: 完整的操作日志和报告
5. **容错性强**: 多重验证和自动修复机制

## 🔮 未来改进

1. **更智能的告警**: 基于历史数据的智能告警阈值
2. **性能监控**: 添加数据同步性能指标
3. **多环境支持**: 支持更多部署环境
4. **可视化面板**: 提供数据同步状态的可视化界面
5. **API 集成**: 提供 API 接口供外部系统调用

---

*此文档随系统更新而持续维护，如有疑问请联系维护团队。*