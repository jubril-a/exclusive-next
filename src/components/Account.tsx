import { createClient } from "@/src/utils/supabase/server"
import AccountClient from "./AccountClient"

async function Account() {
  
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return <AccountClient user={user ? {id: user.id, email: user.email, role: user.role} : null} />
}

export default Account