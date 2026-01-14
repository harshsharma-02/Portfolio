import pr1 from "../Assets/img/pr1.jpg";
import food from "../Assets/img/food.jpg";
import Dash from "../Assets/img/Dash.png"

const ProjectCardData = [
    {
        imgsrc: pr1,
        title: "Portfolio",
        text: "A personal portfolio website to showcase my work and skills.",
        project: "/",
        source: "https://github.com/harshsharma-02/Portfolio"
    },
    {
        imgsrc: food,
        title: "FoodFest",
        text: "A smooth dining experience with online orders, reservations, and easy administration.",
        project: "https://food-fest-xi.vercel.app/",
        source: "https://github.com/harshsharma-02/FoodFest-React"
    },
    {
        imgsrc: Dash,
        title: "Weather Trends & Forecast Analysis Dashboard",
        text: "Built an interactive Power BI dashboard to analyze weather patterns, temperature trends, and key climate metrics using real-world data.",
        project: "https://app.powerbi.com/groups/me/reports/6193d44b-cef2-4a63-9a8c-f9a6ee935103/5fe779cbed21791d87a9?ctid=3f1541fa-00a3-4097-ac36-46e2e50b31ce&experience=power-bi",
    }

];

export default ProjectCardData;