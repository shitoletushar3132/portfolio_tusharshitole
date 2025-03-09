const fetchData = async () => {
  try {
    const resp = await fetch("https://easysave-main.onrender.com");
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call fetchData every 20 seconds
export { fetchData };
