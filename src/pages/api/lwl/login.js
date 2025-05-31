export default async function handler(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const response = await fetch("https://api.wclcricket.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const result = await response.json();
        res.status(200).json(result);
    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }
}