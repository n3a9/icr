/* eslint-disable no-console */

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://icr.now.sh/api"
});

export const getCourseByTitle = title => {
  const requestExtension = `/courses/${title}`;
  return instance.get(requestExtension).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const addCourse = course => {
  return instance.post("/courses", course).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const editCourse = (title, course) => {
  const requestExtension = `/courses/${title}`;
  return instance.put(requestExtension, course).then(
    res => res.data,
    err => {
      console.error(err);
      return null;
    }
  );
};

export const addReview = async (title, review) => {
  let course = await getCourseByTitle(title);
  if (course) {
    course = course.result;
    course.reviews.push(review);
    course.rating += review.rating;
    course.difficulty += review.difficulty;
    return editCourse(title, course);
  } else {
    let newCourse = {
      title: title,
      reviews: [review],
      rating: review.rating,
      difficulty: review.difficulty
    };
    return addCourse(newCourse);
  }
};
