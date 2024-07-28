interface user {
    email:string,
    password:string
}
interface Hotel {
    id:bigint,
    name:string,
    short_description:string,
    guest_per_room:number,
    bed_per_room:number,
    washroom_per_room:number,
    price_per_room:number,
    about:string,
    additional_info:string,
    check_in:string,
    check_out:string,
    total_rooms:number
    hotel_image: hotel_image
}
interface hotel_image {
    id:bigint,
    heroImage:string,
    additionalImage:string

}