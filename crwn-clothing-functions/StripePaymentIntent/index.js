module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
        const amount = req.body && req.body.amount;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"]
        });

        context.res = {
            status: 200, /* Defaults to 200 */
            body: { paymentIntent }
        };
    } catch (error) {
        context.res = {
            status: 400, /* Defaults to 200 */
            body: { error }
        };
    }

}