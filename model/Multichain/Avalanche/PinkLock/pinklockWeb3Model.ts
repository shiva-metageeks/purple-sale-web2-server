import {Model, model, Schema } from 'mongoose';
import {IPinkLockWeb3} from "../../../../types/PinkLock/pinkLockDataWeb3.js";

const pinkLockWeb3SchemaAvalanche:Schema = new Schema<IPinkLockWeb3 >({
    title: String,
});

const PinkLockWeb3Avalanche: Model<IPinkLockWeb3 > = model<IPinkLockWeb3>('PinkLockWeb3Avalanche', pinkLockWeb3SchemaAvalanche);

export default PinkLockWeb3Avalanche;