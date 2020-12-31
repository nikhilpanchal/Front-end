export default (request, response) => {
    const {
        query: {id}
    } = request

    response.statusCode = 200;
    response.json({
        email: 'abc@invalid.abc',
        id,
        name: "Nik Boy"
    });
}