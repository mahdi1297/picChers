import BlogCategorySchema from "./../data-access/schemas/blogCategorySchema";

const getAllImages = () => {
  return new Promise((resolve, reject) => {
    BlogCategorySchema.find({}, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

const insertBlogCategoryToDb = (blogCatObj) => {
  if (!blogCatObj) return false;
  return new Promise((resolve, reject) => {
    try {
      BlogCategorySchema(blogCatObj)
        .save()
        .then((data) => {
          resolve(data);
        })
        .catch((err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
};

export { insertBlogCategoryToDb, getAllImages };
