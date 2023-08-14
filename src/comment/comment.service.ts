import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  getUserComments(userId: string) {
    return 'This is is the comments of the user'
  }
}

