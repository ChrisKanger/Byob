const customTransforms = {
    'changeTitle' : (obj, params) => {
        obj.dst.title = obj.dst.title.toUpperCase();
        return obj;
    }
};

module.exports = customTransforms;