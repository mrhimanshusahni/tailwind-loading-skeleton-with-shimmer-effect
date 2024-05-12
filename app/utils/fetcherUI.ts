import axios from "axios";

export async function fetcherUI(url: string) {
  try {
    const initialResponse = await axios({ method: "get", url: url });
    console.log("initialResponse :>> ", initialResponse);
    if ([0, 200]?.includes(initialResponse.status)) {
      return initialResponse.data;
    }
  } catch (error) {
    throw error as Error;
  }
}
