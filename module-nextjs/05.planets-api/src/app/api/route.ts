import { NextRequest, NextResponse } from "next/server";

let idSequence = 3;
let planets = [
    {
        id: 1,
        name: "Mercury",
        description: "The smallest planet in our solar system and nearest to the Sun.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/960px-Mercury_in_true_color.jpg"
    },
    {
        id: 2,
        name: "Venus",
        description: "The second planet from the Sun and has a thick atmosphere.",
        imageUrl: "https://img.odcdn.com.br/wp-content/uploads/2021/05/Vista-de-Venus-sem-nuvens-em-3D-695x500.jpg"
    }
]

export function GET(req: NextRequest) {
    return NextResponse.json(planets)
}

export async function POST(req: NextRequest) {
    const { name, description, imageUrl } = await req.json()

    const newPlanet = {
        id: idSequence++,
        name,
        description,
        imageUrl
    }
    planets.push(newPlanet)

    return NextResponse.json(newPlanet, { status: 201 })
}

export async function PUT(req: NextRequest) {
    const { id, name, description, imageUrl } = await req.json()

    const planetIndex = planets.findIndex(planet => planet.id === +id);
    if (planetIndex === -1) {
        return NextResponse.json({ error: 'Planeta não encontrado' }, { status: 404 });
    }

    if (name) planets[planetIndex].name = name;
    if (description) planets[planetIndex].description = description;
    if (imageUrl) planets[planetIndex].imageUrl = imageUrl;

    return NextResponse.json(planets[planetIndex]);
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();

    const planetIndex = planets.findIndex(planet => planet.id === +id);
    if (planetIndex === -1) {
        return NextResponse.json({ error: 'Planeta não encontrado' }, { status: 404 });
    }

    const [deletedPlanet] = planets.splice(planetIndex, 1)

    return NextResponse.json({ deletedPlanet })
}
