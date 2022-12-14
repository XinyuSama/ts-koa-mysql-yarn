"use strict";
const departmentService = require('../s');
class DepartmentController {
    async list(ctx, next) {
        // 1.获取数据(offset/size)
        const { offset, size } = ctx.query;
        // 2.查询列表
        const { result, count } = await departmentService.getDepartmentList(offset, size);
        ctx.body = {
            code: 200,
            data: result,
            totalCount: count[0].total
        };
    }
    async create(ctx, next) {
        // 获取用户请求传递的参数
        const department = ctx.request.body;
        // 查询数据库 -> 抽离到service
        const result = await departmentService.create(department);
        // 返回结果
        ctx.body = {
            code: 200,
            data: result
        };
    }
    async update(ctx, next) {
        const { departmentId } = ctx.params;
        const { departmentName, principal, adviser, departmentTotal } = ctx.request.body;
        const result = await departmentService.update(departmentName, principal, adviser, departmentTotal, departmentId);
        ctx.body = {
            code: 200,
            data: result
        };
    }
    async remove(ctx, next) {
        // 1.
        const { departmentId } = ctx.params;
        // 2.删除内容
        const result = await departmentService.remove(departmentId);
        ctx.body = {
            code: 200,
            data: result
        };
    }
}
module.exports = new DepartmentController();
//# sourceMappingURL=content.js.map