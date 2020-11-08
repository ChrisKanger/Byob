const customTransforms = {
    'changeTitle' : (obj, params) => {
        obj.dst.title = "Te gekke titel!";
        return obj;
    }
};

module.exports = customTransforms;