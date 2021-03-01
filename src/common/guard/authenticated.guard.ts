import { ExecutionContext, Injectable, CanActivate, Req } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    console.log(request.session.get('user'))
    request.user = request.session.get('user')
    return true;
  }
}
