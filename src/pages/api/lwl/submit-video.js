export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { token, video } = req.body;

        if (!token || !video) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const response = await fetch("https://api.wclcricket.com/api/round-two-upload-video-url", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ videoUrl: video })
        });

        const result = await response.json();

        if (response.ok) {
            return res.status(200).json(result);
        } else {
            return res.status(response.status).json({ message: result.message || "API request failed" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
