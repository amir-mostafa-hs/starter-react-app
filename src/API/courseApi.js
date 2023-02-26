import axios from "axios";

const BaseUrl = "https://wild-rose-angelfish-gear.cyclic.app/course";

const DeleteCourseApi = async (id) => {
  const result = await axios.delete(BaseUrl + "/" + id);
  return result.data;
};

const getAllCourseDataApi = async () => {
  const result = await axios.get(BaseUrl);
  return result.data;
};

const createCourseApi = async (formData) => {
  const result = await axios.post(BaseUrl, formData);
  return result.data;
};

const getOneCourseDataApi = async (id) => {
  const result = await axios.get(BaseUrl + "/" + id);
  return result.data;
};

const upDateCourseApi = async (id, newData) => {
  const result = await axios.patch(BaseUrl + "/" + id, newData);
  return result.data;
};

export { DeleteCourseApi, getAllCourseDataApi, createCourseApi, getOneCourseDataApi, upDateCourseApi };
