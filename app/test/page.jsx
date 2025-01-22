export default function TestRoute() {

    async function delay(ms) {
        return new Promise((resolve => setTimeout(resolve, ms)))
    }

    async function TestRoute() {
        await delay(3000);

        return <div>Test Route</div>
    }
}