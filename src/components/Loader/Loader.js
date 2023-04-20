const createLoader = async () => {
    const loadedElement = await fetch('JobFetures.json');
    const jobFeatures = await loadedElement.json();
    console.log(jobFeatures)
    return jobFeatures;
}

export default createLoader;