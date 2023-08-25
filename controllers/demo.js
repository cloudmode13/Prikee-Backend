import Demo from '../models/Demo.js';

export async function handlePost(req, res) {
  const { categoryName } = req.body;

  const data = {
    categoryName: categoryName,
  };

  try {
    const demo = await Demo.create(data);
    if (demo) {
      res.send({ data: demo });
      console.log('demo', demo);
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
 
}
