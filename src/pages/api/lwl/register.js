import { setCookie } from "nookies";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, dob, contactNumber, email, favorableTeam, residingCountry, address, city, state, pincode, currencyType, orderAmount } = req.body;

    try {
        const response = await fetch("https://api.wclcricket.com/api/create-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                dob,
                contactNumber,
                email,
                residingCountry,
                favorableTeam,
                address,
                city,
                state,
                country: residingCountry,
                pincode,
                currencyType,
                orderAmount,
            }),
        });

        const result = await response.json();

        if (response.ok && result.statusCode === 200 && result.status === "success") {
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}