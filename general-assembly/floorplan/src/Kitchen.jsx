import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
    return (
        <div className="kitchen">
            <Oven />
            <Sink />
            <span>Kitchen</span>
        </div>
    )
}

export default Kitchen;