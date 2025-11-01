import { createClient } from "@/utils/supabase/client"

type Props = {
    first_name: string,
    last_name: string, 
}

const UserName = ({first_name, last_name}: Props) => {
  return (
    <div className="flex gap-2 items-center p-2 pr-6 rounded-md mb-4 bg-white cursor-pointer">
        <span className="w-8 h-8 flex items-center justify-center text-sm bg-btn-1 text-dark rounded-md">{first_name.at(0)}{last_name.at(0)}</span>
        <span className="w-30 overflow-hidden text-dark text-sm">{first_name}&nbsp;{last_name}</span>
    </div>
  )
}

export default UserName