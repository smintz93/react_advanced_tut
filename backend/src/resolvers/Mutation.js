const Mutations = {
 async createItem(parent, args, ctx, info){
    // TODO: check if they are logged in 

      // methods available on backend due to prisma
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    console.log(item)

    return item;
  }



};

module.exports = Mutations;
