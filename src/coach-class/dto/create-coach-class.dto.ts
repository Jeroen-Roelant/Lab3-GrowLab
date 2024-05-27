export class CreateCoachClassDto {
    UUID: string;
    idOwner: string;
    idMember: string;
    title: string;
    description: string;
    totalCheckpoints: number;
    currentCheckpoint: string;
    postId: string;
    sessionId: string;
    // nextSession: string;
}
