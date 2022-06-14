import { useDispatch } from "react-redux"
import { AllProductAction, CategoryProductAction } from "../../Store/actions/ProductAction"

export function useNavBar() {

    const dispatch = useDispatch()

    const all = () => {
        dispatch(AllProductAction())
    }
    const mobilePhone = () => {
        dispatch(CategoryProductAction("Mobile Phones"))
    }
    const car = () => {
        dispatch(CategoryProductAction("Cars"))
    }
    const motorCycle = () => {
        dispatch(CategoryProductAction("Motorcycles"))
    }
    const pc = () => {
        dispatch(CategoryProductAction("PCs"))
    }
    const glasses = () => {
        dispatch(CategoryProductAction("Glasses"))
    }

    return [all, mobilePhone, car, motorCycle, pc, glasses]
}