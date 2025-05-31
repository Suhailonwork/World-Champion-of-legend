export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { token, quiz_id, answers } = req.body;

        if (!token || !quiz_id || !answers) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const response = await fetch("https://api.wclcricket.com/api/submit-round-one-quiz", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quizId: quiz_id, answers })
        });

        const result = await response.json();
        if(response.ok){
            res.status(200).json(result);
        }

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}