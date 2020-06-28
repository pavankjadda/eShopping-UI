import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "../model/user-profile";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  constructor(private httpClient: HttpClient) {}

  getUserProfile(userProfileUrl: string) {
    return this.httpClient.get<UserProfile>(userProfileUrl);
  }

  updateUserProfile(userProfileUrl: string, userProfile: UserProfile) {
    return this.httpClient.post<UserProfile>(userProfileUrl, userProfile);
  }
}
