import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID HlvtLijcsfPBWqJ3J4h7XO9-9ePad4_lDFyAAhvmlfo",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
