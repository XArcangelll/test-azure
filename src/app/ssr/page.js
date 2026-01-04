import { cookies } from "next/headers"

export default async function  Page(){

    const cookies2 = await cookies();

    console.log(cookies2.get("test"));

    return <>test con ssr</>
}