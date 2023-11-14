import apiClient from "./apiClient";

const apiAnnotations = {
  getAnnotationDetails: async (params) => {
    //Get request for getting a single annotation and its details from the api
    const annotation = params.annotation;
    const annotationId = params.annotationId;
    try {
      const response = await apiClient.get(
        `annotations/${annotation}/${annotationId}`
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  getAnnotationsForProblem: async (params) => {
    //Get request for getting annotations of a particular type (eg. Gene) for a problem
    const annotation = params.annotation;
    const problemId = params.problemId;

    try {
      const response = await apiClient.get(
        `annotations/${annotation}/filter/by-problem:${problemId}`
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  getProblemsForAnnotation: async (params) => {
    // Get request for getting all problems for a particular annotation type
    const annotation = params.annotation;
    const annotationId = params.annotationId;
    try {
      const response = await apiClient.get(
        `annotations/${annotation}/filter/by-annotation:${annotationId}`
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  getAnnotationEntries: async (params) => {
    const annotation = params.annotation;
    try {
      const response = await apiClient.get(`annotations/${annotation}/`);
      return response;
    } catch (error) {
      return error;
    }
  },
  sendFilters: async (params) => {
    const filters = params.filters;
    try {
      const response = await apiClient.post("annotations/filter", filters);
      return response;
    } catch (error) {
      return error;
    }
  },
  // applyFilters: async (params) => {
  //   const queryUrl = params.queryUrl;
  //   try {
  //     const response = await apiClient.get(`${queryUrl}`);
  //     return response;
  //   } catch (error) {
  //     return error;
  //   }
  // },
};

export default apiAnnotations;
