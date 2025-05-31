export default async function handler(req, res) {
    if (req.method === "POST") {
        const { token } = req.body;
        const response = await fetch("https://api.wclcricket.com/api/quiz-questions", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        const result = await response.json();
        res.status(200).json(result);
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}