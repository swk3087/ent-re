export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/javascript");
    res.status(200).send(`
        console.log("loaded!");
    `);
}
