const test_runner = (custom_function, testCases) => {
    console.log(testCases
        .map(testData => ({
            ...testData,
            input:JSON.stringify(testData.input),
            custom_function_output: custom_function(...testData.input),
        })))
};

module.exports = {
    test_runner,
}