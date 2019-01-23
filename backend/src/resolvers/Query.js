const { forwardTo } = require('prisma-binding');
// forwarding yoga to graphql 


const Query = {
  items: forwardTo('db'),
  item: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
