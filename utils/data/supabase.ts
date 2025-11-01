import { createClient } from "../supabase/client"

export const getQuantity = async (id: string) => {
    const supabase = await createClient()

    const { data, error } = await supabase
    .from('cart')
    .select()
    .eq("product_id", id)

    if (data && data[0]) return data[0].quantity

    return 0
}

export const  addToCart = async (id: string, quantity: number) => {
    const supabase = await createClient()
    const prev_quantity = await getQuantity(id)

    const { error } = await supabase
    .from('cart')
    .upsert({ product_id: id, quantity: prev_quantity + quantity }, { onConflict: 'product_id' })

    return error ? "fail" : "success"
}

export const  removeFromCart = async (id: string) => {
    const supabase = await createClient()

    const { error } = await supabase
    .from('cart')
    .delete()
    .eq('product_id', id)

    return error ? false : true
}