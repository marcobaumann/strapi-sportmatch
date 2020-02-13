module.exports = async (ctx, next) => {
  if (ctx.params.id) {
    const queriedArena  = await strapi.query('arena').findOne({ id: ctx.params.id },  ['Staff']);

    if (queriedArena.Staff.id === 1) { //ctx.state.user.id
      // Go to next policy or will reach the controller's action.
      return await next();
    }
    ctx.unauthorized(`You're not the Arena Staff!`);
    return;
  }

  // console.log("isArenaStaff", ctx.params.id);
  ctx.unauthorized(`Arena ID not sent!`);
};
