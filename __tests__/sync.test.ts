import { complianceTestsSync } from "@konceiver/v-test-suite";
import { StoreSync } from "../src";

complianceTestsSync(new StoreSync<number>(), [...Array(5).keys()]);
