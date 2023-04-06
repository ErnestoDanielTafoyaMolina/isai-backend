import { getConnection, querys } from "../database";

export const getWeatherReport = async (req, res)=> {
    const { ciudad } = req.body;
    try {
        const pool = await getConnection();
        const result = await pool.query(querys.getWeatherInfoByCity, ciudad);
        if(result.length<=0) return res.send("no encontrada la ciudad");
        console.log(result);
        return res.json(result);
    } catch (error) {
        res.status(500);
        console.error(error);
    }
}