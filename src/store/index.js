import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/trainerName.slice'

export default configureStore ({
    reducer: {
        trainer

    }
})


