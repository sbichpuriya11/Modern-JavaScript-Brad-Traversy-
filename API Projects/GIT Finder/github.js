class GitHub{
    constructor(){
        this.client_id = 'e33062ec949b630bfeca'
        this.client_secret = '29166f788b3f60e76a263aeacad786d925e9c047'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()
        return {
            // profile:profile
            profile,
            repos
        }
    }
}