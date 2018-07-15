export const buildPostTree = posts => {
  const tree = [];
  const dict = {};
  posts.forEach(_ => {
    dict[_.id] = _;
    if (!_.parentId) {
      tree.push(_);
    } else {
      const parent = dict[_.parentId];
      if (parent && !parent.children.find(child => child.id === _.id)) {
        parent.children.push(_);
      }
    }
  });
  // TODO: will need another loop for orphan posts
  return {
    tree,
    dict
  }
};
