const ClientError = require("../errorObj/client-error");

function error(err, req, res, next) {
    if(err instanceof ClientError) {
        res.status(err.status).send(err.message);
    }
    else {
        res.status(500).send("An unexpected error occured");
    }
}

module.exports = error;