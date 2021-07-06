module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if( (req.query.name || (req.body && req.body.name)) ) {
        const name = (req.query.name || (req.body && req.body.name));
        const responseMessage = "Hello, " + name + ". This HTTP triggered function executed successfully."

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    } else {
        try {
            const products = data.getProducts();
            context.res.status(200).json(products);
        } catch (error) {
            context.res.status(500).send(error);
        }
    }
}