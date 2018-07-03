'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async users() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.list(ctx.query);
  }

  async user() {
    const ctx = this.ctx;
    try {
      ctx.body = await ctx.service.user.find(ctx.params.id);
    } catch (error) {
      /* do nothing */
    }
  }

  async create() {
    const ctx = this.ctx;
    const created = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = created;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const body = ctx.request.body;
    try {
      ctx.body = await ctx.service.user.update({ id, updates: body });
    } catch (error) {
      /* do nothing */
    }
  }

  async del() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    try {
      await ctx.service.user.del(id);
      ctx.status = 200;
    } catch (error) {
      /* do nothing */
    }
  }
}

module.exports = UserController;
