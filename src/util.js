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

export const recalculateDepth = (post, depth = 0) => {
  post.depth = depth;
  post.children.forEach(_ => recalculateDepth(_, depth + 1));
}

export const flattenTree = tree => [tree].concat(...tree.children.map(flattenTree));
