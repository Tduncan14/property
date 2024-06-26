import connectDB from "@/config/database";
import Property from "@/models/Property";



//GET /api/properties/:id
export const GET = async (request, { params }) => {





    try {

        await connectDB()

        const property = await Property.findById(params.id)

        if (!property) return new Response.json('property not found', { status: 404 })

        return Response.json(property)

    }

    catch (error) {

        console.log(error);

        return new Response('Something Went Wrong', { status: 500 });

    }



}