async function callTeamsApi(date: string, time: string): Promise<any> {
    const apiUrl = 'https://api.teams.microsoft.com';

    const requestBody = {
        date,
        time
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error('Failed to call Teams API');
    }

    const data = await response.json();
    return data;
}
