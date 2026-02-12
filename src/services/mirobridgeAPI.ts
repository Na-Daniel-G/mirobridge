// Miro API Handler Class

class MiroAPI {
    constructor(token) {
        this.token = token;
        this.baseUrl = 'https://api.miro.com/v1';
    }

    async fetchUserInfo() {
        const response = await fetch(`${this.baseUrl}/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    // Add other Miro API methods here
}

export default MiroAPI;
